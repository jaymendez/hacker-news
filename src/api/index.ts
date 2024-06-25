import http from "@/lib/axios";
import { TItem, TUser } from "@/types/hacker-news";
import axios, { AxiosError } from "axios";

const handleErrors = (err: Error | AxiosError) => {
  if (axios.isAxiosError(err)) {
    throw err?.response?.data?.message ?? "Error Encountered.";
  } else {
    throw err;
  }
};

const getTopStories = async () => {
  try {
    const res = await http.get<string[]>(
      `topstories.json?limitToFirst=20&orderBy="$priority"`
    );
    return res;
  } catch (err) {
    const error = err as Error | AxiosError;
    handleErrors(error);
  }
};

const getStoryItem = async (storyId: string) => {
  try {
    const res = await http.get<TItem>(`item/${storyId}.json`);
    return res;
  } catch (err) {
    const error = err as Error | AxiosError;
    handleErrors(error);
  }
};

const getUser = async (userId: string) => {
  try {
    const res = await http.get<TUser>(`user/${userId}.json`);
    return res;
  } catch (err) {
    const error = err as Error | AxiosError;
    handleErrors(error);
  }
};

const lazyGetStories = async () => {
  try {
    const stories = await getTopStories();
    if (stories?.status === 200) {
      const detailedStories = await Promise.all(
        stories.data.map(async (story) => {
          const res = await getStoryItem(story);
          const storyData = { ...res?.data };
          if (res?.status === 200) {
            if (res.data.by) {
              const user = await getUser(res.data.by);
              if (user?.status === 200) {
                storyData.user = user.data;
              }
            }
            return storyData;
          }
          return null;
        })
      );
      return detailedStories.filter(Boolean) as TItem[];
    }
  } catch (err) {
    const error = err as Error | AxiosError;
    handleErrors(error);
  }
};
export { getTopStories, getStoryItem, getUser, lazyGetStories };

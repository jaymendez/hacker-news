import styles from "./stories.module.scss";
import { cn } from "@/lib/cn";
import { useQuery } from "react-query";
import { lazyGetStories } from "@/api";
import StoryItem from "./story-item";
import { useMemo } from "react";
import _ from "lodash";

const Stories = () => {
  const { data } = useQuery({
    queryFn: lazyGetStories,
    queryKey: ["stories"],
  });

  const sortedStories = useMemo(
    () => _.sortBy(data, "score").reverse(),
    [data]
  );

  return (
    <div className={cn(styles.container)}>
      <h1 style={{ fontSize: "56px", fontWeight: "bold" }}>HACKER NEWS</h1>
      <h3 style={{ fontSize: "32px", fontWeight: "bold" }}>Top Stories</h3>
      <section className={cn(styles.gridContainer)}>
        {sortedStories?.map((story) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </section>
    </div>
  );
};

export default Stories;

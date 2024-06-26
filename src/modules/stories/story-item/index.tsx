import styles from "./story-item.module.scss";
import { cn } from "@/lib/cn";
import { TItem } from "@/types/hacker-news";
import { ArrowFatLineUp, Coin, Link, UserCircle } from "@phosphor-icons/react";
import { HACKER_NEWS_URL } from "@/utils/constants";
import { formatDate } from "@/lib/formatDate";
import Skeleton from "react-loading-skeleton";

type Props = {
  story?: TItem;
  isLoading?: boolean;
};

const StoryItem = ({ story, isLoading }: Props) => {
  const handleClick = () => {
    if (story) window.open(story?.url, "_blank");
  };

  return (
    <button
      aria-label="story-item"
      className={cn(styles.card)}
      onClick={handleClick}
    >
      <div className={cn(styles.cardBody)}>
        <div className={cn(styles.userDetails)}>
          <UserCircle size="42px" />
          <div className={cn(styles.author)}>
            {isLoading ? (
              <Skeleton height={20} width={100} />
            ) : (
              <a
                href={`${HACKER_NEWS_URL}/user?id=${story?.by}`}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                {story?.by}
              </a>
            )}
            {isLoading ? (
              <Skeleton height={20} width={20} />
            ) : (
              story?.user?.karma && (
                <>
                  <span>• </span>
                  <span data-testid="user-karma" className={cn(styles.karma)}>
                    {story.user.karma}
                    <Coin size={20} />
                  </span>
                </>
              )
            )}
          </div>
        </div>
        {isLoading ? (
          <Skeleton height={10} width={400} count={3} />
        ) : (
          <p className={cn(styles.title)} onClick={handleClick}>
            {story?.title}
          </p>
        )}
        {isLoading ? (
          <Skeleton height={10} width={100} />
        ) : (
          story?.time && (
            <div className={cn(styles.storyDetails)}>
              {formatDate(new Date(story.time * 1000), "MMM dd, yyyy")}
            </div>
          )
        )}
        <div className={cn(styles.footerContainer)}>
          {isLoading ? (
            <Skeleton height={150} width={400} style={{ borderRadius: 16 }} />
          ) : (
            <img
              className={cn(styles.image)}
              src="/images/work.webp"
              onClick={handleClick}
            />
          )}
          <div className={cn(styles.footer)}>
            <div className={cn(styles.storyScore)}>
              <ArrowFatLineUp />
              <span>
                {isLoading ? <Skeleton height={15} width={40} /> : story?.score}
              </span>
            </div>
            <a href={story?.url} target="_blank">
              <Link />
            </a>
          </div>
        </div>
      </div>
    </button>
  );
};

export default StoryItem;

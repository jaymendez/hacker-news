import styles from "./story-item.module.scss";
import { cn } from "@/lib/cn";
import { TItem } from "@/types/hacker-news";
import { ArrowFatLineUp, Coin, Link, UserCircle } from "@phosphor-icons/react";
import { HACKER_NEWS_URL } from "@/utils/constants";
import { formatDate } from "@/lib/formatDate";

type Props = {
  story: TItem;
};

const StoryItem = ({ story }: Props) => {
  const handleClick = () => {
    window.open(story.url, "_blank");
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
            <a
              href={`${HACKER_NEWS_URL}/user?id=${story.by}`}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              {story?.by}
            </a>
            {story.user?.karma && (
              <>
                <span>• </span>
                <span data-testid="user-karma" className={cn(styles.karma)}>
                  {story.user.karma}
                  <Coin size={20} />
                </span>
              </>
            )}
          </div>
        </div>
        <p className={cn(styles.title)} onClick={handleClick}>
          {story?.title}
        </p>
        {story.time && (
          <div className={cn(styles.storyDetails)}>
            {formatDate(new Date(story.time * 1000), "MMM dd, yyyy")}
          </div>
        )}
        <div className={cn(styles.footerContainer)}>
          <img
            className={cn(styles.image)}
            src="/images/work.webp"
            onClick={handleClick}
          />
          <div className={cn(styles.footer)}>
            <div className={cn(styles.storyScore)}>
              <ArrowFatLineUp />
              <span>{story.score}</span>
            </div>
            <a href={story.url} target="_blank">
              <Link />
            </a>
          </div>
        </div>
      </div>
    </button>
  );
};

export default StoryItem;

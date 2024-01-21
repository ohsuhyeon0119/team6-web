
import { useEffect, useState } from "react";
import UserCard from "../../components/user/UserCard";
import styles from "./UserFollowerPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getFollowerList } from "../../apis/user";
import { defaultResponseHandler } from "../../apis/custom";
import { FollowerListType, FollowerType } from "../../type";

export default function UserFollowerPage() {
  const navigate = useNavigate();
  const { id: pageUserId } = useParams();
  const [followerListData, setFollowerListData] = useState<FollowerListType>(
    [] as FollowerListType,
  );
  const [loading, setLoading] = useState(true);

  console.log(followerListData);

  useEffect(() => {
    getFollowerList(parseInt(pageUserId ? pageUserId : ""))
      .then(defaultResponseHandler)
      .then((data: FollowerListType) => {
        setFollowerListData(data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
      });
    };
    scrollToTop();
  }, []);

  return (
    <>
      <div className={styles.fixedTab}>
        <div className={styles.backButtonContainer}>
          <button
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <div className={styles.titleContainer}>팔로워</div>
      </div>

      {!loading && (
        <div className={styles.followPage}>
          <div className={styles.followListContainer}>
            <ul className={styles.followList}>
              {followerListData.map((follower: FollowerType) => (
                <UserCard follower={follower} />
              ))}
            </ul>
          </div>
        </div>
      )}

    </>
  );
}
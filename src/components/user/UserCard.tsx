import { useState, useEffect } from "react";
import styles from "./UserCard.module.scss";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======

>>>>>>> 7b4e7515e4f24bb0973b204301f268631cb2742a
import { FollowerType } from "../../type";
import { deleteFollow, postAddFollow } from "../../apis/user";
import { useAuthContext } from "../../contexts/authContext";
import { getUserDetail } from "../../apis/user";

export default function UserCard({
  follower,
  isMyFollowing,
}: {
  follower: FollowerType;
  isMyFollowing: boolean;
}) {
  const [isFollowing, setIsFollowing] = useState(isMyFollowing); // 나중에는 내 유저 데이터의 팔로우 목록과 비교하여 팔로우 중인지 아닌지를 판단해야 함
  const { accessToken } = useAuthContext();

  const buttonClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (!accessToken) return;
    isFollowing
      ? deleteFollow(accessToken, follower.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setIsFollowing(false);
          })
          .catch(() => {
            console.log("팔로우 취소 실패");
          })
      : postAddFollow(accessToken, follower.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setIsFollowing(true);
          })
          .catch(() => {
            console.log("팔로우 실패");
          });
  };

  return (
    <li>
      <Link to={`/users/${follower.id}`}>
        <div className={styles.imgBox}>
          <img
            src="https://an2-glx.amz.wtchn.net/assets/default/user/photo_file_name_large-ab0a7f6a92a282859192ba17dd4822023e22273e168c2daf05795e5171e66446.jpg"
            alt="userImg"
<<<<<<< HEAD
=======

>>>>>>> 7b4e7515e4f24bb0973b204301f268631cb2742a
          />
        </div>
        <div className={styles.userBox}>
          <div className={styles.infoWrapper}>
<<<<<<< HEAD
            <p>{follower.id}</p>
            <div>{follower.bio}</div>
=======

            <p>{follower.nickname}</p>
            <div>{follower.bio}</div>

>>>>>>> 7b4e7515e4f24bb0973b204301f268631cb2742a
          </div>
          <div className={styles.followButtonWrapper}>
            <button
              className={
                isFollowing ? styles.isFollowing : styles.isNotFollowing
              }
<<<<<<< HEAD
              onClick={buttonClickHandler}
=======
              onClick={(e) => {
                e.preventDefault();

                if (!accessToken) return alert("로그인이 필요합니다.");
                isFollowing
                  ? deleteFollow(accessToken, follower.id)
                  : postAddFollow(accessToken, follower.id);

                setIsFollowing(!isFollowing);
              }}
>>>>>>> 7b4e7515e4f24bb0973b204301f268631cb2742a
            >
              {isFollowing ? "팔로워" : "팔로잉"}
            </button>
          </div>
        </div>
      </Link>
    </li>
  );
}

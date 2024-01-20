import { useNavigate } from "react-router-dom";
import styles from "./UserStorageWishesPage.module.scss";

export default function UserStorageWishesPage() {
  const navigate = useNavigate();
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
        <div className={styles.titleContainer}>보고 싶어요</div>
      </div>
      <div className={styles.wishesPage}>
        <section className={styles.movieListSection}>
          <ul className={styles.movieList}>
            {Array(20)
              .fill(0)
              .map(() => {
                return (
                  <li
                    onClick={() => {
                      navigate("/contents/1");
                    }}
                  >
                    <img
                      src="https://an2-img.amz.wtchn.net/image/v2/WSwwV37ZZJtSYbI_jOi0Hg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk16VTBNVEUwTXprME5ESXlNVFkyT0RJaWZRLmQtaFFQNUgyQk1kb3hmZk5CQ3ZWS2JiZ3ZfMDFXc0ZLdlJXUXZDOElQVFE"
                      alt=""
                    />
                    <p>노 베어스</p>
                  </li>
                );
              })}
          </ul>
        </section>
      </div>
    </>
  );
}

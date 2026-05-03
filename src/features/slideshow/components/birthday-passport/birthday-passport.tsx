import { Cake, Globe2, Heart, Plane } from "lucide-react";
import { copy } from "@/i18n/copy";
import { styles } from "./birthday-passport.styles";

export const BirthdayPassport = () => (
  <figure aria-hidden="true" className={styles.passport} role="presentation">
    <div className={styles.booklet}>
      <div className={styles.bookletTitle}>{copy.slideshow.passportBookletTitle}</div>
      <Plane className={styles.bookletPlane} size={18} strokeWidth={1.8} />
      <Cake className={styles.bookletCake} size={30} strokeWidth={1.7} />
      <Heart className={styles.bookletHeart} size={13} strokeWidth={2.2} />
    </div>

    <div className={styles.ticket}>
      <div className={styles.ticketMain}>
        <div className={styles.ticketHeader}>
          <Plane className={styles.ticketPlane} size={24} strokeWidth={1.8} />
          <span className={styles.ticketLabel}>{copy.slideshow.passportTicketLabel}</span>
        </div>

        <div className={styles.ticketRule}>
          <span />
          <Heart size={10} fill="currentColor" strokeWidth={0} />
          <span />
        </div>

        <div className={styles.ticketTitle}>{copy.slideshow.passportTicketTitle}</div>

        <dl className={styles.ticketMeta}>
          <div>
            <dt>{copy.slideshow.passportDestinationLabel}</dt>
            <dd>{copy.slideshow.passportDestinationValue}</dd>
          </div>
          <div>
            <dt>{copy.slideshow.passportDateLabel}</dt>
            <dd>{copy.slideshow.passportDateValue}</dd>
          </div>
          <div>
            <dt>{copy.slideshow.passportSeatLabel}</dt>
            <dd>{copy.slideshow.passportSeatValue}</dd>
          </div>
        </dl>
      </div>

      <div className={styles.ticketStub}>
        <div className={styles.stubIcon}>
          <Globe2 size={30} strokeWidth={1.5} />
          <Heart size={18} strokeWidth={1.7} />
        </div>
        <div className={styles.barcode} />
      </div>
    </div>
  </figure>
);

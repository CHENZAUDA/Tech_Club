import React from "react";
import "./ToursHighTech.css";
import ForumIcon from "@material-ui/icons/Forum";
export default function ToursHighTech() {
  return (
    <div className="container">
      <div>
        <span>
          <h2>סיורים בחברות הייטק</h2>
        </span>
      </div>
      <div className="categorybox">
        <div className="template">
          <img src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png" />
          <p>
            החברה הוקמה בספטמבר 1998 על ידי לארי פייג' וסרגיי ברין, בעת שלמדו
            באוניברסיטת סטנפורד, והפכה לחברה ציבורית באוגוסט 2004. בהצהרת
            הכוונות הרשמית של החברה היא "לארגן את כלל המידע העולמי ולהופכו לנגיש
            ויעיל לכלל העולם
          </p>
          <span className="icons">
            <ForumIcon> icon</ForumIcon>
          </span>
        </div>
        <div className="template">
          <img src="https://banner2.cleanpng.com/20180721/tbz/kisspng-amazon-com-brand-logo-e-commerce-customer-international-volunteering-5b534dc6015e31.6273062615321860540056.jpg" />
          <p>
            המוכרת בשם המקוצר אמזון, היא חברה אמריקנית למסחר אלקטרוני ושירותי
            מחשוב ענן. החברה שבסיסה בסיאטל, וושינגטון, נוסדה ב-5 ביולי 1994. היא
            הייתה מחלוצות המסחר באינטרנט והתפרסמה בראשיתה במכירת ספרים
          </p>
          <span className="icons">
            <ForumIcon> icon</ForumIcon>
          </span>
        </div>
        <div className="template">
          <img src="data:image/png;base64,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" />
          <p>
            חברה ישראלית שמפתחת פלטפורמה לבניית אתרי אינטרנט. הפלטפורמה מאפשרת
            למשתמש לבנות אתר אינטרנט ללא עלות וללא צורך בידע קודם בתחומים כמו
            קידוד או עיצוב אתרים. ויקס נוסדה בשנת 2006 בישראל. ויקס נוסדה בשנת
            2006 בישראל.
          </p>
          <span className="icons">
            <ForumIcon> icon</ForumIcon>
          </span>
        </div>
        <div className="template">
          <img src="https://mpng.subpng.com/20180601/sg/kisspng-check-point-software-technologies-logo-synercomm-i-checkpoint-5b112d10aaa310.9406021815278523046989.jpg" />
          <p>
            החברה נוסדה בשנת 1993 על ידי שלמה קרמר, מריוס נכט וגיל שויד, שמכהן
            כמנכ"ל החברה מיום הקמתה. על בסיס טכנולוגיה הנקראת stateful
            inspection שפיתח שויד לראשונה, יצרה החברה תוכנת חומת אש שנקראה
            FireWall-1 יתחה החברה את
          </p>
          <span className="icons">
            <ForumIcon> icon</ForumIcon>
          </span>
        </div>
        <div className="template">
          <img src="https://image.pngaaa.com/700/710700-middle.png" />
          <p>
            חברת מיקרוסופט הוקמה ב-4 באפריל 1975 על ידי שני סטודנטים צעירים, ביל
            גייטס ופול אלן. החברה הוקמה על מנת לפתח תוכנה למעבדי מיקרו, דבר שלא
            נעשה לפני כן, כמו כן גם על מנת למכור את מפרש הבייסיק שיצרו אלן
            וגייטס. מפרש זה נרכש לשיווק במחשביה של חברת אפל, דבר שהפך אותו לתקן
            במחשב הביתי הנפוץ הראשון שמכרה האחרונה.
          </p>
          <span className="icons">
            <ForumIcon> icon</ForumIcon>
          </span>
        </div>
      </div>
    </div>
  );
}

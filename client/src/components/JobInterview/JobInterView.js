import React from "react";
import "./JobInterView.css";
import { HiChat } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa";
export default function JobInterView() {
  return (
    <div className="container">
      <div>
        <span>
          <h2>ראיונות עבודה</h2>
        </span>
      </div>
      <div className="categorybox">
        <div className="template">
          <h4>דגשים בסיסיים ושאלות מקצועיות</h4>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/InheritanceVehicles.png" />
          <p>
            תכנות מונחה־עצמים או לעיתים תכנות מוכוון־עצמים (באנגלית:
            Object-Oriented Programming, או בקיצור OOP) הוא פרדיגמת תכנות
            המשתמשת ב"עצמים" (אובייקטים) לשם תכנות תוכניות מחשב.
          </p>
        </div>
        <div className="template">
          <h4>שאלות אלגוריתם</h4>
          <img src="https://www.excelando.co.il/wp-content/uploads/2021/02/shutterstock_1110822329-scaled.jpg" />
          <p>
            במדעי המחשב, אלגוריתמים לחיפוש מחרוזות , לעיתים נקראים גם אלגוריתמים
            להתאמת מחרוזות, הם מחלקה חשובה של אלגוריתמים על מחרוזות המנסים למצוא
            היכן מחרוזת אחת או יותר (נקראות גם תבניות)
          </p>
        </div>
        <div className="template">
          <h4>HR ראיונות</h4>
          <img src="https://www.sigma-hr.co.il/wp-content/uploads/2021/06/business-job-interview-concept-2-1000x480.jpg" />
          <p>
            בתורות מודרניות של ניהול משאבי אנוש נהוג לחלק את תהליך מיון העובדים
            לשני שלבים: ניתוח עבודה, שהוא תהליך של הערכת דרישות התפקיד והכישורים
            הנדרשים על מנת לבצע אותו, ובחירת עובד בעזרת אמצעי מיון.
          </p>
        </div>
        <div className="template">
          <h4>טיפים</h4>
          <img src="https://www.yoyoseo.co.il/wp-content/uploads/2016/02/digital-marketing-tips.jpg" />
          <p>
            לימודי מחשבים ותכנות אונליין - היום קיימת אפשר ללמוד באמצעות קורסים
            ושיעורים הזמינים באינטרנט. ניתן למצוא שיעורי מחשבים במגוון רחב של
            נושאים, מותאמים לכל הרמות ומאפשרים לאנשים לבדוק האם התחום מדבר 
          </p>
        </div>
        <div className="template">
          <h4>תיק עבודות</h4>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7P-C1vhoC5e-JGevG-7yEB9TpW8fFt-iug&usqp=CAU" />
          <p>
            תיק עבודות בנושא גיט מאוד חשוב משום שזה הנסיון בתור ג'וניור וככה
            תוכל להוכיח שיש לך משהו ביד תיק עבודות בנושא גיט מאוד חשוב משום שזה
            הנסיון בתור ג'וניור וככה תוכל להוכיח שיש לך משהו ביד תיק עבודות
            בנושא גיט מאוד חשוב משום שזה הנסיון בתור ג'וניור וככה תוכל להוכיח
            שיש לך משהו ביד
          </p>
        </div>
      </div>
      <span className="icons">
        <button>
          <HiChat />
        </button>
        <button>
          <FaRegBell />
        </button>
      </span>
    </div>
  );
}

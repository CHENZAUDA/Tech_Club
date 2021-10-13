import * as React from "react";
// import "./Blog.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SocialMediaCom() {
  const data = [
    {
      title: "Facebook",
      url: "https://img.freepik.com/free-photo/3d-facebook-logo-background-facebook-famous-social-media-platform_73903-697.jpg?size=626&ext=jpg",
      info: "פייסבוק בעמ היא חברה ציבורית רב-לאומית אמריקאית, המפעילה בין השאר את הרשתות החברתיות פייסבוק ואינסטגרם, תוכנות המסרים המיידיים וואטסאפ ופייסבוק מסנגר וחברת המחשוב הלביש אוקולוס. החברה נוסדה באמצע 2004, כחצי שנה לאחר הקמת אתר האינטרנט שבבעלותה.",
    },
    {
      title: "Linkdein",
      url: "https://sm.pcmag.com/t/pcmag_in/news/s/scam-alert/scam-alert-linkedin-users-hit-by-malware-from-fake-job-offer_zbh8.1200.jpg",
      info: "LinkedIn היא רשת חברתית מקוונת שנועדה ליצירת קשרים מקצועיים ועסקיים בין משתמשיה. החברה הוקמה בדצמבר 2002, כאשר אתר הרשת הושק במאי 2003 והוא בבעלות תאגיד לינקדאין. נכון ליוני 2019 רשומים באתר כ-630 מיליון משתמשים. במאי 2011 הונפקה החברה בנאסדק, תחת הסימול LNKD.",
    },
    {
      title: "GitHub",
      url: "https://miro.medium.com/max/719/0*kHdpA0lO-qQVbaXq.png",
      info: "GitHub הוא שרות ניהול גרסאות ושירות אחסון, מבוסס רשת, עבור מיזמי פיתוח תוכנה, שבהם משתמשים במערכת גיט. GitHub מספק שירות זה בתשלום למאגרים פרטיים ושירות חינמי למיזמי קוד פתוח. במאי 2011 הוכר GitHub כשירות אחסון הקוד הפופולרי ביותר למיזמי קוד פתוח. GitHub נרכשה על ידי מיקרוסופט בסוף שנת 2018 תמורת כ-7.5 מיליארד דולר.",
    },
  ];

  return (
    <div className="container-blog">
      {data.map((subject) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="220"
              image={subject.url}
              alt="picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {subject.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ textAlign: "right" }}
              >
                {subject.info}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="large">
                לחץ כאן לשמוע עוד
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}

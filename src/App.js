import "./App.css";
import Calendar from "./Calendar";
import moment from "moment";
import { updateLocale } from "moment/moment";
import "moment/locale/ru";

moment.updateLocale("ru", { week: { dow: 1 } });

const now = {
  day: moment().format("D"),
  week: moment().format("dddd"),
  monthPlural: moment().format("D MMMM"),
  month: moment().format("MMMM"),
  year: moment().format("YYYY"),
};

const startMonth = moment().startOf("month").startOf("week");
const endMonth = moment().endOf("month").endOf("week");

const totalDays = [];
const day = startMonth.clone();

while (!day.isAfter(endMonth)) {
  totalDays.push(day.clone().format("D"));
  day.add(1, "day");
}

function App() {
  return <Calendar date={now} totalDays={totalDays} />;
}

export default App;

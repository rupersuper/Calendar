export default function Calendar(props) {
	const weeks = [];

	for (let i = 0; i < props.totalDays.length; i += 7) {
		weeks.push(props.totalDays.slice(i, i + 7));
	  }

	return (
		<div className="ui-datepicker">
  <div className="ui-datepicker-material-header">
    <div className="ui-datepicker-material-day">{props.date.week}</div>
    <div className="ui-datepicker-material-date">
      {/* <div className="ui-datepicker-material-day-num">{props.date.day}</div> */}
      <div className="ui-datepicker-material-month">{props.date.monthPlural}</div>
      <div className="ui-datepicker-material-year">{props.date.year}</div>
    </div>
  </div>
  <div className="ui-datepicker-header">
    <div className="ui-datepicker-title">
      <span className="ui-datepicker-month">{props.date.month}</span>&nbsp;<span className="ui-datepicker-year">{props.date.year}</span>
    </div>
  </div>
  <table className="ui-datepicker-calendar">
    <colgroup>
      <col/>
      <col/>
      <col/>
      <col/>
      <col/>
      <col className="ui-datepicker-week-end"/>
      <col className="ui-datepicker-week-end"/>
    </colgroup>
    <thead>
      <tr>
        <th scope="col" title="Понедельник">Пн</th>
        <th scope="col" title="Вторник">Вт</th>
        <th scope="col" title="Среда">Ср</th>
        <th scope="col" title="Четверг">Чт</th>
        <th scope="col" title="Пятница">Пт</th>
        <th scope="col" title="Суббота">Сб</th>
        <th scope="col" title="Воскресенье">Вс</th>
      </tr>
    </thead>
    <tbody>
		{weeks.map((week, index) => (
			<tr key={index}>
				{week.map((day) => (
					<td className={props.date.day === day ? "ui-datepicker-today" : ''} key={day}>{day}</td>
				))}
			</tr>
		))}
    </tbody>
  </table>
</div>
	)
}
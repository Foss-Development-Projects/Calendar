import CalendarTitle from "./calendar/blocks/CalendarTitle";
import CalendarDayBar from "./calendar/blocks/CalendarDayBar";
import CalendarDay from "./calendar/blocks/CalendarDay";
const Calendar = () => {
	return(
		<div>
			<div className="calendar">
				<CalendarTitle customClassName="calendar-title-container" />
				<CalendarDayBar customClassName="calendar-daybar-container" />
				<CalendarDay customClassName="calendar-day-container" />
			</div>
		</div>
	)
}
export default Calendar;
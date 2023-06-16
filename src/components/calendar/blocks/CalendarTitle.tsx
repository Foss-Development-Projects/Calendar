import { BsFillCalendarWeekFill } from 'react-icons/bs'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

const CalendarTitle = (props: any) => {
	const size: number = 18;
	return(
		<div className={`${props.customClassName}`}>
			<div className="calendar-title">
				<section className="calendar-title-section">
					<BsFillCalendarWeekFill className="calendar-title-icon" size={24} />
					<h1 className="calendar-title-text">January 31, 2023</h1>
				</section>
				<section className="calendar-title-button-section">
					<button className="calendar-button calendar-button-year">
						<BiLeftArrowAlt className="calendar-button-icon" size={size} title="Previous Year" />
					</button>
					<button className="calendar-button calendar-button-month">
						<FaAngleLeft className="calendar-button-icon" size={size} title="Previous Month" />
					</button>
					<button className="calendar-button calendar-button-month">
						<FaAngleRight className="calendar-button-icon" size={size} title="Next Month" />
					</button>
					<button className="calendar-button calendar-button-year">
						<BiRightArrowAlt className="calendar-button-icon" size={size} title="Next Year" />
					</button>
				</section>
			</div>
		</div>
	)
}
export default CalendarTitle;
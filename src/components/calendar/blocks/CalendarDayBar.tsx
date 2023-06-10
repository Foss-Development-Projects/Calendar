import { 
	TbLetterS, 
	TbLetterM, 
	TbLetterT, 
	TbLetterW, 
	TbLetterF 
} from 'react-icons/tb';

const CalendarDayBar = (props: any) => {
	return (
		<div className={`${props.customClassName}`}>
			<div className="calendar-day-bar">
				<section className="calendar-day-list">
					<span className="calendar-daybar-name">
						<TbLetterS title="Sunday" />
					</span>
					<span className="calendar-daybar-name">
						<TbLetterM title="Monday" />
					</span>
					<span className="calendar-daybar-name">
						<TbLetterT title="Tuesday" />
					</span>
					<span className="calendar-daybar-name">
						<TbLetterW title="Wednesday" />
					</span>
					<span className="calendar-daybar-name">
						<TbLetterT title="Thursday" />
					</span>
					<span className="calendar-daybar-name">
						<TbLetterF title="Friday" />
					</span>
					<span className="calendar-daybar-name">
						<TbLetterS title="Saturday" />
					</span>
				</section>
			</div>
		</div>
	)
}
export default CalendarDayBar;
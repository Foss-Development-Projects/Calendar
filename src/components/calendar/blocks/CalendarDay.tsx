const CalendarDay = (props: any) => {
	const dayRange: Array<number> = [];
	const appendValue = (val: number, store: Array<number>) => {
		for(let i=1; i <= val; i++){
			store.push(i);
		}
	}
	appendValue(30, dayRange);
	return(
		<div>
			<div className={props.customClassName}>
				{dayRange.map((item: any, index: number) => {
					return(
						<span className="calendar-day" key={index}>{item}</span>
					)
				})}
			</div>
		</div>
	)
}
export default CalendarDay;
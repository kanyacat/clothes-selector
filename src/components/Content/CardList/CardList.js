import styles from './cardList.css'
import { CardInfo } from '../Card/CardElements/CardInfo'
import { DeleteButton } from '../Card/CardElements/DeleteButton'
import { Card } from '../Card'
import { useDispatch, useSelector } from 'react-redux'
import { clothesSelector } from '../../../redux/clothes/selector'
import { deleteItems } from '../../../redux/clothes/slice'

let direction = false

export function CardList() {
	const { items } = useSelector(clothesSelector)
	const dispatch = useDispatch()

	// const [cardsState, setCardsState] = useState(items)

	// const sortClick = category => {
	// 	direction = !direction
	// 	setCardsState(
	// 		[...cardsState].sort((prev, next) => {
	// 			return direction
	// 				? next[category].localeCompare(prev[category])
	// 				: prev[category].localeCompare(next[category])
	// 		})
	// 	)
	// }

	const handleDelete = id => {
		dispatch(deleteItems(id))
	}

	return (
		<>
			{/*<div className={styles.btnContainer}>*/}
			{/*	<SortBtn onClick={() => sortClick('weather')} text={'Погода'} />*/}
			{/*	<SortBtn onClick={() => sortClick('style')} text={'Стиль'} />*/}
			{/*	<SortBtn onClick={() => sortClick('color')} text={'Цветовая гамма'} />*/}
			{/*</div>*/}
			<ul>
				{items != null
					? items.map((card, index) => {
							return (
								<Card key={index}>
									<button
										className={styles.deleteBtn}
										onClick={() => handleDelete(card.id)}
									>
										<DeleteButton width={'38'} height={'38'} />
									</button>
									<CardInfo
										name={card.name}
										style={card.style}
										color={card.color}
										weather={card.weather}
										note={card.note}
										img={card.img}
										//   img='https://svgshare.com/i/ucc.svg'
									/>
								</Card>
							)
					  })
					: ''}
			</ul>
		</>
	)
}

import React from 'react'
/**
 * This components is the template that used to render items in appropriate format.
 * data: All the lists from store
 * handleClick: two different methods will be call depend on different situation, add or remove.
 * eventText: this parameter will show the text that depend on different situation, add or remove.
 * titleOnly: this will decide wether to show the title or the whole list details.
 */
const List = React.memo(({data, handleClick, eventText, titleOnly}) =>
	titleOnly ? (
		data.map( item => (
				<li key = { item.id }>
					{ item.title }
				</li>
			)
		)) : (

		data.map( item => (
				<figure key = { item.id }>
					<img src={ item.img } />
					<a onClick={()=>handleClick(item)}>
						{ eventText }
					</a>
				</figure>
			)
		)

	)
)

export default List
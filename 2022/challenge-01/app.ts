function wrapping(gifts: string[]){ 
	const wrap = (item: string) => "*".repeat(item.length + 2)
	return gifts.map((gift) => wrap(gift) + "\n*" + gift + "*\n" + wrap(gift))
}

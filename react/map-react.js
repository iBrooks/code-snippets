let newArray = array.map(arrayElement => {
  return(
    <Component
      key={arrayElement.id}
      prop={arrayElement.data}
    />
  )
})
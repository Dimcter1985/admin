import { combineValidators, isRequired } from 'revalidate'

const NeighborhoodsValidator = combineValidators({
  name: isRequired('Name'),
  image: isRequired('Image'),
  areaId: isRequired('Area Id'),
})

export default NeighborhoodsValidator

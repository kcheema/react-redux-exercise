import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    // HINT: Add all the cases for the different actions here.

    default:
      return state
  }
}

export default visibilityFilter

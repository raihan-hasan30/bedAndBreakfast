const LOAD_SPOT_DETAILS = "spotDetails/LOAD_SPOT_DETAILS"

const loadSpotDetails = spot => ({
  type: LOAD_SPOT_DETAILS,
  spot
})

export const fetchSpotDetails = id => async dispatch => {
  const response = await fetch(`/api/spots/${id}`)
  if (response.ok) {
    const spot = await response.json()
    console.log("spot", spot)
    dispatch(loadSpotDetails(spot))
  }
}

const spotDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_SPOT_DETAILS:
      return action.spot
    default:
      return state
  }
}

export default spotDetailsReducer
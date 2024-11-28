import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import ProfileButton from "./ProfileButton"
import OpenModalButton from "../OpenModalButton/OpenModalButton.jsx"
import LoginFormModal from "../LoginFormModal/LoginFormModal.jsx"
import SignupFormModal from "../SignupFormModal/SignupFormModal.jsx"
import "./Navigation.css"

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks
  if (sessionUser) {
    sessionLinks = (
      <li>
        <ProfileButton user={sessionUser} />
      </li>
    )
  } else {
    sessionLinks = (
      <>
        <li>
          <OpenModalButton
            buttonText="Log In"
            modalComponent={<LoginFormModal />}
          />
        </li>
        <li>
          <OpenModalButton
            buttonText="Sign Up"
            modalComponent={<SignupFormModal />}
          />
        </li>
      </>
    )
  }

  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isLoaded && sessionLinks}
    </ul>
  )
}

export default Navigation

// import { NavLink } from "react-router-dom"
// import { useSelector } from "react-redux"
// import ProfileButton from "./ProfileButton"
// import OpenModalButton from "../OpenModalButton/OpenModalButton.jsx"
// import LoginFormModal from "../LoginFormModal/LoginFormModal.jsx"

// import "./Navigation.css"

// function Navigation({ isLoaded }) {
//   const sessionUser = useSelector(state => state.session.user)

//   const sessionLinks = sessionUser ? (
//     <li>
//       <ProfileButton user={sessionUser} />
//     </li>
//   ) : (
//     <>
//       <li>
//         <OpenModalButton
//           buttonText="Log In"
//           modalComponent={<LoginFormModal />}
//         />
//       </li>
//       <li>
//         <NavLink to="/signup">Sign Up</NavLink>
//       </li>
//     </>
//   )

//   return (
//     <ul>
//       <li>
//         <NavLink to="/">Home</NavLink>
//       </li>
//       {isLoaded && sessionLinks}
//     </ul>
//   )
// }

// export default Navigation

function ProfilePic (){
    const imgUrl = "./src/assets/react.svg";
    const handleClick = (e) => e.target.style.display = "none";
    return(
    <>
      <img src={imgUrl} onClick={(e) => handleClick(e)}></img>
    </>
    )
}

export default ProfilePic;
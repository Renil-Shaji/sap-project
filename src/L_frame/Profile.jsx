function Profile(props) {
  return (
    <div class="profile-left">
      <p>{props.name}</p>
      <p class="faded-text">{props.id}</p>
    </div>
  );
}

export default Profile;

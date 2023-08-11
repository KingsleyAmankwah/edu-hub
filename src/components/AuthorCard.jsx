function AuthorCard({ name, profilePictureSrc, biography }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img
        src={profilePictureSrc}
        alt={name}
        className="object-cover h-32 w-32 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700">{biography}</p>
    </div>
  );
}

export default AuthorCard;

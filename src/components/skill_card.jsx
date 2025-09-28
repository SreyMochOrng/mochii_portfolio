function SkillCard({ title, icon: Icon, languages }) {
  return (
    <div className="flex flex-col space-y-4 bg-background border border-primary400 p-4 rounded-lg flex-1">
      <div className="bg-primary300 mx-auto p-4 rounded-full">
        {Icon && <Icon className="text-4xl text-primary800" />}
      </div>

      <h2 className="text-primary700 font-semibold text-2xl text-center">
        {title}
      </h2>

      <div className="py-2 flex flex-wrap justify-center gap-2">
        {languages &&
          languages.map((lang, index) => (
            <span
              key={index}
              className="text-primary950 bg-primary50 border border-primary300 px-5 py-2 rounded-full text-sm font-medium"
            >
              {lang}
            </span>
          ))}
      </div>
    </div>
  );
}

export default SkillCard;

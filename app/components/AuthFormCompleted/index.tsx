
const AuthFormCompleted = ({ email }: { email: string | null | undefined }) => {
    return (
      <div className="wrapper-auth-completed">
        <h3>
          You are sign in as: <span className="text-orange-500">{email}</span>
        </h3>
      </div>
    );
  };

  export default AuthFormCompleted;
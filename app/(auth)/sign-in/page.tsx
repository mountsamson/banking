import AuthForm from "@/components/AuthForm";

const SignIn: React.FC = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignIn;

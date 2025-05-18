
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("You've been added to our waitlist!");
    setEmail("");
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2">
      <div className="flex flex-col sm:flex-row w-full gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 px-4 border-[1.5px] border-gray-200 rounded-lg focus:border-rook-blue focus:ring-1 focus:ring-rook-blue"
          required
        />
        <Button 
          type="submit" 
          className="h-12 px-6 bg-rook-red hover:bg-rook-yellow hover:text-black transition-colors duration-300 text-white font-medium rounded-lg"
          disabled={isLoading}
        >
          {isLoading ? "Joining..." : "Join Waitlist"}
        </Button>
      </div>
    </form>
  );
};

export default WaitlistForm;

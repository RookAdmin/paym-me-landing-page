
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail } from "lucide-react";

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
    
    toast.success("You're in! We'll be in touch soon.");
    setEmail("");
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2">
      <div className="flex flex-col sm:flex-row w-full gap-3">
        <div className="relative flex-grow">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 pl-10 pr-4 border-[1.5px] border-gray-200 rounded-lg focus:border-rook-blue focus:ring-1 focus:ring-rook-blue"
            required
          />
        </div>
        <Button 
          type="submit" 
          className="h-12 px-6 bg-rook-red hover:bg-rook-yellow hover:text-black transition-colors duration-300 text-white font-medium rounded-lg shadow-sm"
          disabled={isLoading}
        >
          {isLoading ? "Joining..." : "Join Priority List"}
        </Button>
      </div>
      <p className="text-xs text-center text-gray-500 mt-3">
        Be the first to experience seamless payments. No spam, ever.
      </p>
    </form>
  );
};

export default WaitlistForm;

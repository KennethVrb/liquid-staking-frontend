import { PolkadotProvider } from "@/contexts";
import { Stake, UserWallet } from "@/components";
import Card from "@/ui-kit/Card";

function HomePage() {
  return (
    <PolkadotProvider>
      <Card small>
        <Stake />
        <UserWallet />
      </Card>
    </PolkadotProvider>
  );
}

export default HomePage;

import { PolkadotProvider } from "@/contexts";
import { Stake, UserWallet } from "@/components";
import Card from "@/ui-kit/cards/Card";

function HomePage() {
  return (
    <PolkadotProvider>
      <Card>
        <Stake />
        <UserWallet />
      </Card>
    </PolkadotProvider>
  );
}

export default HomePage;

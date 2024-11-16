import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center mt-[10vh] h-screen">
      <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full max-w-[600px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Morpho?</AccordionTrigger>
          <AccordionContent>
          Morpho (formerly known as Morpho Blue) is a trustless and efficient lending primitive with permissionless market creation. It enables the deployment of minimal and isolated lending markets by specifying:
          <br/><br/>
One collateral asset,<br/>
One loan asset,<br/>
A Liquidation LTV (LLTV),<br/>
An oracle,<br/>
An IRM.<br/><br/>
The protocol is trustless and was designed to be more efficient and flexible than any other decentralized lending platform.
          </AccordionContent>
          </AccordionItem><AccordionItem value="item-2">
          <AccordionTrigger>Why do we need another DeFi lending protocol?</AccordionTrigger>
          <AccordionContent>
          Three key areas stood out for us on current lending protocols: They are
<br/><br/>
1. Not trustless,<br/>
2. Not efficient,<br/>
3. Not scalable.<br/><br/>
Morpho solves this by separating the risk management layer from the core protocol, enabling permissionless market creation and permissionless risk management with Morpho Vaults (formerly known as MetaMorpho). The separation allows Morpho to focus only on lending. As a result, it is immutable (trustless) and ultra-efficient in terms of interest rates and gas consumption. Permissionless market creation and Morpho make Morpho far more scalable than Aave and Compound. Anyone can create markets with any ERC20 asset (blue chip, longtail, RWA), and rebuild Aave-like experiences but with better rates on top of Morpho.
          </AccordionContent>
          </AccordionItem><AccordionItem value="item-3">
          <AccordionTrigger>Why is Morpho a permissionless protocol?</AccordionTrigger>
          <AccordionContent>
          Protocols should do less to enable more. This means having a simple codebase focused on providing a simple, efficient, and trustless functionality that users and builders can rely on indefinitely. From there, applications and other projects can build on top of or integrate the protocol to create new use cases or simplify the user experience for end users.
          </AccordionContent>
          </AccordionItem><AccordionItem value="item-4">
          <AccordionTrigger>How does Morpho incentivize users?</AccordionTrigger>
          <AccordionContent>
          By design, Morpho aims to optimize three areas that users of any lending protocol care about: interest rates, leverage, and gas consumption. These native benefits should incentivize users to move liquidity from existing protocols to Morpho. A one-click migration tool is developed to make this transition easier. Separately, the Morpho DAO could choose to bootstrap Morpho by incentivizing specific markets with MORPHO rewards. This would have to go through governance.
          </AccordionContent>
          </AccordionItem><AccordionItem value="item-5">
          <AccordionTrigger>How has Morpho been audited for security?</AccordionTrigger>
          <AccordionContent>
          Morpho is known for its industry-leading security practices and follows a multi-faceted approach to security. You can check the list of the security reviews <Link className="underline" href="https://docs.morpho.org/morpho/concepts/security/audits">here</Link>. There are also two ongoing bug bounty programs with a maximum bounty of $2,500,000.
          </AccordionContent>
          </AccordionItem><AccordionItem value="item-6">
          <AccordionTrigger>Has the protocol been formally verified?</AccordionTrigger>
          <AccordionContent>
          Yes, the protocol has been properly verified using Certora. You can find more information in the <Link className="underline" href="https://docs.morpho.org/morpho/concepts/security/formal-verification">Formal Verification section</Link>.
          </AccordionContent>

        </AccordionItem>
      </Accordion>
    </div>
  );
}

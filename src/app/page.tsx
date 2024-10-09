import {General} from "@/app/components/General";
import {Partners} from "@/app/components/Partners";
import {Reports} from "@/app/components/Reports";
import {Form} from "@/app/components/Form";
import {RevenueBalance} from "@/app/components/RevenueBalance";

export default async function Home() {
  return (
    <div>
        <General/>
        <RevenueBalance/>
        <Partners/>
        <Reports/>
        <Form/>
    </div>
  );
}

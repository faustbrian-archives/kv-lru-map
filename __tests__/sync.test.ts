import { complianceTestsSync } from "@keeveestore/test-suite";
import { StoreSync } from "../src/sync";

complianceTestsSync(new StoreSync<string, string>(32), {
	key1: "value1",
	key2: "value2",
	key3: "value3",
	key4: "value4",
	key5: "value5",
});

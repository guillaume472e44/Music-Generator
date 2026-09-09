import { useGenerals } from "../../store";
import InputNumber from "../../common/InputNumber";

export default function Tempo() {
  const { tempo, updateTempo } = useGenerals((state) => state.time);
  const storeParams = { storeValue: tempo, updateStoreValue: updateTempo };
  const inputParams = {
    target: "tempo",
    min: 30,
    max: 240,
  };
  return (
    <div>
      <h2>Tempo</h2>
      <InputNumber inputParams={inputParams} storeParams={storeParams} />
    </div>
  );
}

import Gift from '../Gift';
import { giftsData } from '@/data/giftsData';

const GiftList = () => {
  const giftListWithData = giftsData.map((gift) => (
    <Gift key={gift.id} data={gift} />
  ));
  return <div>{giftListWithData}</div>;
};

export default GiftList;

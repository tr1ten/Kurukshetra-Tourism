import Rating from './Rating';
import Card from './Accomodation_card';

const Accomodation = [
  { image: 'https://placeimg.com/400/225/arch', Title: 600, description: 'horizontal', direction: 'horizontal' },
  { image: 'https://placeimg.com/400/225/arch', Title: 600, description: 'horizontal', direction: 'horizontal' },
  { image: 'https://placeimg.com/400/225/arch', Title: 600, description: 'horizontal', direction: 'horizontal' },
  { image: 'https://placeimg.com/400/225/arch', Title: 600, description: 'horizontal', direction: 'horizontal' },
  { image: 'https://placeimg.com/400/225/arch', Title: 600, description: 'horizontal', direction: 'horizontal' },
  { image: 'https://placeimg.com/400/225/arch', Title: 600, description: 'horizontal', direction: 'horizontal' },
];
function AccomodationsPage() {
  return (
    <div className="flex flex-wrap mx-36">
      {Accomodation.map((e) => (
        <Card>place={e}</Card>
      ))}
    </div>
  );
}

export default AccomodationsPage;

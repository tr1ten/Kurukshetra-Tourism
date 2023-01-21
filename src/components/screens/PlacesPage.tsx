import card from './place_card';
const imageSizes = [
  { url: 'horizontal', Title: 600, description: 'horizontal', direction: 'horizontal' },
  { url: 'horizontal', Title: 600, description: 'horizontal', direction: 'horizontal' },
  { url: 'horizontal', Title: 600, description: 'horizontal', direction: 'horizontal' },
  { url: 'horizontal', Title: 600, description: 'horizontal', direction: 'horizontal' },
  { url: 'horizontal', Title: 600, description: 'horizontal', direction: 'horizontal' },
  { url: 'horizontal', Title: 600, description: 'horizontal', direction: 'horizontal' },
];
function PlacesPage() {
  return (
    <div>
      <h1>Places</h1>
      <div className="flex mx-32 flex-wrap">{imageSizes.map((e) => card(e))}</div>
    </div>
  );
}

export default PlacesPage;

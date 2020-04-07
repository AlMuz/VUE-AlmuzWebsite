export default function ({ app: { $cookiz }, redirect }) {
  if (!$cookiz.get('intro')) {
    redirect('/conversation')
  }
}

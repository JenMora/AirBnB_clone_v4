$(document).ready(function() {
  $('input[type="checkbox"]').change(function() {
    var amenities = [];
    $('input[type="checkbox"]:checked').each(function() {
      amenities.push({
        id: $(this).data('id'),
        name: $(this).data('name')
      });
    });
    var amenitiesText = amenities.map(function(amenity) {
      return amenity.name;
    }).join(', ');
    $('.Amenities h4').text('Amenities: ' + amenitiesText);
  });
});

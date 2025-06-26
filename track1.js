document.addEventListener('DOMContentLoaded', () => {
    const trackingData = [
        { status: 'Order Placed', date: '09 Aug 2025', time: '10:00am', icon: 'fa-box' },
        { status: 'Order Confirmed', date: '09 Aug 2025', time: '10:30am', icon: 'fa-check-circle' },
        { status: 'Packed the product', date: '09 Aug 2025', time: '12:00pm', icon: 'fa-box-open' },
        { status: 'Arrived in the warehouse', date: '10 Aug 2025', time: '02:00pm', icon: 'fa-warehouse' },
        { status: 'Near by Courier facility', date: '10 Aug 2025', time: '03:00pm', icon: 'fa-map-marker-alt' },
        { status: 'Out for Delivery', date: '12 Aug 2025', time: '05:00pm', icon: 'fa-truck' },
        { status: 'Delivered', date: '12 Aug 2025', time: '09:00pm', icon: 'fa-handshake' }
    ];

    const trackingTimeline = document.getElementById('tracking-timeline');

    // Simulate the current status index (e.g., 4 means "Near by Courier facility" is current)
    // You would typically get this from your backend
    const currentStatusIndex = 4; // Represents "Near by Courier facility" as current

    trackingData.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('tracking-item');

        if (index < currentStatusIndex) {
            itemElement.classList.add('completed');
        } else if (index === currentStatusIndex) {
            itemElement.classList.add('current');
        }

        itemElement.innerHTML = `
            <div class="tracking-item-icon">
                <i class="fas ${item.icon}"></i>
            </div>
            <div class="tracking-item-content">
                <h3>${item.status}</h3>
                <p>${item.date}, ${item.time}</p>
            </div>
        `;
        trackingTimeline.appendChild(itemElement);
    });
});
self.addEventListener('push', event => {
    const data = event.data.json();
    self.registration.showNotification('Забери код', {
        body: 'Нажмите, чтобы получить ваш код',
        icon: 'https://cahhek.github.io/weef323423f/unnamed.jpg',
        data: {
            url: 'https://cahhek.github.io/weef323423f/codes.html'
        }
    });
});

self.addEventListener('notificationclick', event => {
    event.notification.close();

    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});

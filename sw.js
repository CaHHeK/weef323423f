self.addEventListener('push', event => {
    const data = event.data.json();
    self.registration.showNotification('Забери код', {
        body: `Ваш код: ${data.code}`,
        icon: 'https://cahhek.github.io/weef323423f/unnamed.jpg',
        data: {
            code: data.code,
            url: 'https://t.me/hamsTer_kombat_bot/start'
        }
    });
});

self.addEventListener('notificationclick', event => {
    const { code, url } = event.notification.data;

    event.notification.close();

    event.waitUntil(
        clients.openWindow(url).then(() => {
            // Копируем код в буфер обмена после открытия URL
            return fetch('/copy-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code })
            });
        })
    );
});

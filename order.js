// order.js

const addOrder = async ({ redisClient, order }) => {
    try {
        // Validate that required fields are present
        if (!order.quantity) { // Could add this validation !order.orderId || !order.orderItem || !order.productId ||
            throw new Error('Invalid order data. Please provide orderId, orderItemId, productId, and quantity.');
        }

        // Create an order key using the orderId
        const orderKey = `order:${order.orderId}`;

        // Check if the order already exists in the database
        const existingOrder = await redisClient.json.get(orderKey);

        if (existingOrder !== null) {
            throw new Error(`Order ${orderKey} already exists`);
        }

        // Create the order data in Redis
        await redisClient.json.set(orderKey, '$', order);

        // Return success message
        return { message: 'Order added successfully' };
    } catch (error) {
        // Handle errors
        throw error;
    }
};

module.exports = { addOrder };

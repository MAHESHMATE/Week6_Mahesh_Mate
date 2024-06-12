"use strict";
// // Import models
// import { Book } from './bookModel';
// import { Author } from './authorModel';
// import { Review } from './reviewModel';
// import { Rating } from './ratingModel';
// import { Payment } from './paymentModel';
// import { BookAuthor } from './BookAuthors';
// import { User} from './userModel';
// // Book-Author Many-to-Many relationship
// Book.belongsToMany(Author, { through: BookAuthor, foreignKey: 'bookId' });
// Author.belongsToMany(Book, { through: BookAuthor, foreignKey: 'authorId' });
// // Book-Review One-to-Many relationship
// Book.hasMany(Review, { foreignKey: 'bookId' });
// Review.belongsTo(Book, { foreignKey: 'bookId' });
// // Book-Rating One-to-Many relationship
// Book.hasMany(Rating, { foreignKey: 'bookId' });
// Rating.belongsTo(Book, { foreignKey: 'bookId' });
// // Book-Payment One-to-Many relationship
// Book.hasMany(Payment, { foreignKey: 'bookId' });
// Payment.belongsTo(Book, { foreignKey: 'bookId' });
// // User-Review One-to-Many relationship
// User.hasMany(Review, { foreignKey: 'userId' });
// Review.belongsTo(User, { foreignKey: 'userId' });
// // User-Rating One-to-Many relationship
// User.hasMany(Rating, { foreignKey: 'userId' });
// Rating.belongsTo(User, { foreignKey: 'userId' });
// // User-Payment One-to-Many relationship
// User.hasMany(Payment, { foreignKey: 'userId' });
// Payment.belongsTo(User, { foreignKey: 'userId' });
//# sourceMappingURL=associations.js.map
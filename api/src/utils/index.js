module.exports = {
  date(timestamp) {
    const date = new Date(timestamp);

    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`,
      format: `${day}-${month}-${year}`,
    };
  },

  handleCatchedError: (res, message, status = 500) => {
    const response = {
      message,
    };

    if (message.search("\n") >= 0) {
      response.message = message.split("\n");
    }

    return res.status(status).json(response);
  },

  getPagination: (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
  },

  getPagingData: (data, page, limit) => {
    const { count: totalItems, rows: registers } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, registers, totalPages, currentPage };
  },
};

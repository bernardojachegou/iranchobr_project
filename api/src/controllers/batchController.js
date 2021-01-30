const { batch } = require("../models");
const {
  handleCatchedError,
  getPagination,
  getPagingData,
} = require("../utils");
const Yup = require("yup");

exports.get = async (req, res, next) => {
  try {
    const batches = await batch.findAll();

    if (batches == 0) {
      return res.status(200).json({
        message: "The table is empty!",
      });
    }

    return res.status(200).json(batches);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getAndCount = async (req, res, next) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);
  try {
    await batch
      .findAndCountAll({
        limit,
        offset,
      })
      .then((data) => {
        const batches = getPagingData(data, page, limit);
        res.send(batches);
      });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aBatch = await batch.findByPk(id);

    if (!aBatch) {
      return res.status(400).json({
        message: "Batch not found!",
      });
    }

    return res.status(200).json(aBatch);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.post = async (req, res, next) => {
  try {
    const { no_lote, ds_lote } = req.body;

    const data = {
      no_lote,
      ds_lote,
    };

    const schema = Yup.object().shape({
      no_lote: Yup.string().required().min(6),
      ds_lote: Yup.string().required().min(12),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const aBatch = await batch.create(req.body);
    return res.status(200).json(aBatch);
  } catch (error) {
    handleCatchedError(res, error.message, 400);
  }
};

exports.put = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aBatch = await batch.findByPk(id);

    if (!aBatch) {
      return res.status(400).json({
        message: "Batch not found!",
      });
    }

    const { no_lote, ds_lote } = req.body;

    const data = {
      no_lote,
      ds_lote,
    };

    const schema = Yup.object().shape({
      no_lote: Yup.string().required().min(6),
      ds_lote: Yup.string().required().min(12),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    await batch.update(data, { where: { id } });
    return res.status(200).json({ updated: true });
  } catch (error) {
    handleCatchedError(res, error.message, 400);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aBatch = await batch.findByPk(id);

    if (!aBatch) {
      return res.status(400).json({
        deleted: false,
        message: "Couldn't delete: Batch not found!",
      });
    }

    aBatch.destroy();
    return res.status(200).json({ deleted: true });
  } catch (error) {
    handleCatchedError(res, error.message);
  }
};

const { batch } = require("../models");
const { handleCatchedError } = require("../utils");
const Yup = require("yup");

exports.get = async (req, res, next) => {
  try {
    const batches = await batch.findAll();
    return res.json(batches);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aBatch = await batch.findAll({
      where: {
        id: id,
      },
    });
    return res.json(aBatch);
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

    const aLote = await batch.create(req.body);
    return res.json(aLote);
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
    return res.json({ updated: true });
  } catch (error) {
    handleCatchedError(res, error.message, 400);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aBatch = await batch.findByPk(id);

    if (aBatch) {
      aBatch.destroy();
      return res.json({ deleted: true });
    }

    return res.status(400).json({
      deleted: false,
      message: "Entidade não encontrada.",
    });
  } catch (error) {
    handleCatchedError(res, error.message);
  }
};

const { animals_lote } = require("../models");
const { handleCatchedError } = require("../utils");
const Yup = require("yup");

exports.get = async (req, res, next) => {
  try {
    const animals = await animals_lote.findAll();
    return res.json(animals);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aLote = await animals_lote.findAll({
      where: {
        id: id,
      },
    });
    return res.json(aLote);
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

    const aLote = await animals_lote.create(req.body);
    return res.json(aLote);
  } catch (error) {
    handleCatchedError(res, error.message, 400);
  }
};

exports.put = async (req, res, next) => {
  try {
    const { id } = req.params;
    const aLote = await animals_lote.findByPk(id);

    if (!aLote) {
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

    await animals_lote.update(data, { where: { id } });
    return res.json({ updated: true });
  } catch (error) {
    handleCatchedError(res, error.message, 400);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oAnimals_lote = await animals_lote.findByPk(id);

    if (oAnimals_lote) {
      oAnimals_lote.destroy();
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

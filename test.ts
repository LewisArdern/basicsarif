import { Request, Response, NextFunction } from 'express'

exports.example1 = (req: Request) => {

  return isVulnerable(req.body.foo)
}

exports.example2 = (req: Request) => {

  return isNotVulnerable(req.body.foo)
}

function isVulnerable(source) {
    // found with Semgrep Pro Engine
    return eval(source)
}

function isNotVulnerable(source) {
    // safe because of sanitizer
    const protect = safe_eval(source)
    return eval(protect)
}


function isNotVulnerable1(req: Request) {
    // safe because of req
    const protect = req.body.foo
    const f = {"p":protect}
    return eval(f)
}

function isNotVulnerable2(req: Request) {
  // safe because of req
  const protect = req.body.foo
  const f = {"p":protect}
  return eval(f)
}

